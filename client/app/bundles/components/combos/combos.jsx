import * as app_constants from 'constants/app_constants';
import * as react_table_ultis from 'shared/react-table/ultis';
import * as routes from 'config/routes';
import axios from 'axios';
import css from 'assets/sass/react-table.scss';
import React from 'react';
import ReactTable from 'react-table';

const DEFAULT_IMAGE_COMBO = app_constants.DEFAULT_IMAGE_COMBO_URL;

export default class Combos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      combos: props.combos,
      combo: {}
    }
  }

  render() {
    const columns = [
      {
        header: '#',
        accessor: 'id',
        render: row => <div className='text-right'>{row.index + 1}</div>,
        hideFilter: true,
        width: 50
      },
      {
        header: I18n.t('combos.image'),
        id: 'url',
        accessor: d => d.image.url,
        render: row => <img src={row.value ? row.value : DEFAULT_IMAGE_COMBO}
          className='img-responsive'/>,
        sortable: false,
        hideFilter: true,
        width: 200,
      },
      {
        header: I18n.t('combos.name'),
        accessor: 'name',
      },
      {
        header: I18n.t('combos.description'),
        accessor: 'description',
        render: row => {
          return <span title={row.value}>{row.value}</span>;
        },
      },
      {
        header: I18n.t('combos.com_value'),
        accessor: 'com_value',
        render: row => <div className='text-right'>{row.value}</div>,
        filterMethod: react_table_ultis.defaultNumberFilter,
        width: 150
      },
      {
        header: '',
        accessor: 'actions',
        render: row => (
          <div className='text-center'>
            <button className='btn btn-info' data-index={row.index}
              onClick={this.handleEdit.bind(this)}
              title={I18n.t('buttons.edit')}>
              <i className='fa fa-pencil-square-o' data-index={row.index}></i>
            </button>
            <button className='btn btn-danger' data-index={row.index}
              onClick={this.handleDelete.bind(this)}
              title={I18n.t('buttons.delete')}>
              <i className='fa fa-trash' data-index={row.index}></i>
            </button>
          </div>
        ),
        sortable: false,
        hideFilter: true,
        width: 150
      }
    ];
    return (
      <div>
        <ReactTable className='-striped -highlight' data={this.state.combos}
          columns={columns} defaultPageSize={react_table_ultis.defaultPageSize}
          showFilters={true}
          defaultFilterMethod={react_table_ultis.defaultFilter}
        />
      </div>
    );
  }

  handleEdit(event) {
    let $target = $(event.target);
    $target.blur();
    var data = {combo: this.state.combos[$target.data('index')]}
    this.props.handleEditCombo(data);
    $('.modal-create-combo').modal();
  }

  handleDelete(event) {
    let $target = $(event.target);
    $target.blur();
    let combo = this.props.combos[$target.data('index')];
    if(confirm(I18n.t('combos.confirm_delete'))) {
      axios.delete(routes.admin_combo_url(combo.id),{
        params: {
          authenticity_token: ReactOnRails.authenticityToken()
        },
        headers: {'Accept': 'application/json'}
      })
      .then(response => {
        this.setState({
          combo: {}
        });
        this.props.handleAfterDeleted(combo);
      })
      .catch(error => console.log(error));
    }
  }
}

