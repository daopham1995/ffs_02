import Form from './form';
import React from 'react';

export default class Modal extends React.Component {

  render() {
    return (
      <div className='modal-create-combo modal fade in' role='dialog'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <button type='button' className='close' data-dismiss='modal'>&times;</button>
              <h4 className='modal-title'>{I18n.t('combos.create')}</h4>
            </div>
            <div className='modal-body'>
              <Form combo={this.props.combo}
                url={this.props.url}
                handleAfterSaved={this.handleAfterCreated.bind(this)}
                handleAfterUpdated={this.props.handleAfterUpdated} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleAfterCreated(subject) {
    this.props.handleAfterCreated(subject);
    $('.modal-create-combo').modal('hide');
  }
}
