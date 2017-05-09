import * as routes from 'config/routes';
import Combos from './combos';
import axios from 'axios';
import Modal from './form/modal';
import React from 'react';

export default class ComboBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      combos: props.combos,
      combo: {}
    };
  }

  render() {
    let url = routes.admin_combos_url();
    if (this.state.combo.id != undefined) {
      url = routes.admin_combo_url(this.state.combo.id);
    }
    return (
      <div className='row subjects admin-subjects'>
        <div className='col-md-12'>
          <div className='box box-success'>
            <div className='box-header with-border'>
              <h3 className='box-title'>{I18n.t('combos.all')}</h3>

              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse">
                  <i className="fa fa-minus"></i>
                </button>
                <button type="button" className="btn btn-box-tool" data-widget="remove">
                  <i className="fa fa-times"></i>
                </button>
              </div>
            </div>

            <div className='box-body no-padding'>
              <div className='row'>
                <div className='col-md-8'>
                  <button type="button" className="btn btn-info create-subject"
                    onClick={this.handleCreateSubject.bind(this)}>
                    <i className="fa fa-plus"></i> {I18n.t('combos.create')}
                  </button>

                </div>
                <Modal combo={this.state.combo} url={url}
                  handleAfterCreated={this.handleAfterCreated.bind(this)}
                  handleAfterUpdated={this.handleAfterUpdated.bind(this)} />
              </div>
            </div>

            <div className='box-footer'>
              <Combos combos={this.props.combos}
                handleEditCombo={this.handleEditCombo.bind(this)}
                handleAfterDeleted={this.handleAfterDeleted.bind(this)} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleAfterCreated(new_combo) {
    this.state.combos.push(new_combo);
    this.setState({
      combos: this.state.combos,
      combo: {}
    });
  }

  handleAfterUpdated(new_combo) {
    let index = this.state.combos
      .findIndex(combo => combo.id === new_combo.id);
    this.state.combos[index] = new_combo;
    this.setState({
      combos: this.state.combos,
      combo: {}
    });
  }

  handleAfterDeleted(deleted_combo) {
    _.remove(this.state.combos,
      combo => combo.id === deleted_combo.id);
    this.setState({combos: this.state.combos});
  }

  handleCreateSubject() {
    this.setState({
      combo: {},
    });
    $('.modal-create-combo').modal();
  }

  handleEditCombo(data) {
    this.setState(data);
  }
}
