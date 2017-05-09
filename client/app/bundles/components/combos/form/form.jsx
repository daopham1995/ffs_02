import React from 'react';
import ReactOnRails from 'react-on-rails';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import _ from 'lodash';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.combo.name || '',
      image: props.combo.image || null,
      description: props.combo.description || '',
      com_value: props.combo.com_value || '',
      changeImage: false,
      errors: null
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      name: nextProps.combo.name || '',
      description: nextProps.combo.description || '',
      image: nextProps.combo.image || null,
      com_value: nextProps.combo.com_value || '',
      errors: null,
      changeImage: false
    });
  }

  render() {
    let image = null;
    if(this.state.image){
      if(this.state.image.url) {
        image = <img src={this.state.image.url} className='img-responsive'/>;
      } else if(this.state.image.preview){
        image = <img src={this.state.image.preview} className='img-responsive'/>;
      }
    }
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className='form-group'>
          <div className='dropzone'>
            <div className='form-group'>
              <button type='button' className='btn btn-danger btn-select-file'
                onClick={this.onOpenClick.bind(this)}>
                <i className='fa fa-upload'></i> {I18n.t('combos.select_image')}
              </button>
            </div>
          </div>
          <div className='hidden'>
            <Dropzone onDrop={this.onDrop.bind(this)} ref='dropzoneField'
              multiple={false} accept='image/*' />
          </div>
          <div className='image-preview'>
            {image}
          </div>
        </div>
        <div className='form-group'>
          <input type='text' placeholder={I18n.t('combos.name')}
            value={this.state.name} onChange={this.handleChange.bind(this)}
            className='form-control' name='name' />
        </div>
        <div className='form-group'>
          <input type='text' placeholder={I18n.t('combos.description')}
            value={this.state.description} onChange={this.handleChange.bind(this)}
            className='form-control' name='description' />
        </div>
        <div className='form-group'>
          <input type='number' placeholder={I18n.t('combos.com_value')}
            value={this.state.com_value} onChange={this.handleChange.bind(this)}
            className='form-control' name='com_value' />
        </div>
        <div className='form-group'>
          <div className='text-right'>
            <button type='submit' className='btn btn-primary'
              onClick={this.handleSubmit.bind(this)}>
              <i className="fa fa-floppy-o"></i>
              &nbsp;{I18n.t('combos.save')}
            </button>
          </div>
        </div>
      </form>
    );
  }

  handleChange(event) {
    let attribute = event.target.name;
    this.setState({
      [attribute]: event.target.value
    });
  }

  onDrop(acceptedFiles, rejectedFiles) {
    this.setState({
      image: acceptedFiles[0],
      changeImage: true
    });
  }

  onOpenClick() {
    this.refs.dropzoneField.open();
  }

  handleSubmit(event) {
    event.preventDefault();
    let combo = _.omit(this.state, 'errors');
    if(!this.state.changeImage) {
      combo = _.omit(combo, 'image');
    }
    let formData = new FormData();
    for(let key of Object.keys(combo)) {
      formData.append('combo[' + key + ']', combo[key]);
    }
    formData.append('authenticity_token', ReactOnRails.authenticityToken());
    let method = this.props.combo.id ? 'PUT' : 'POST';
    axios({
      url: this.props.url,
      method: method,
      data: formData,
      headers: {'Accept': 'application/json'}
    })
    .then(response => {
      if(this.props.combo.id) {
        $('.modal-create-combo').modal('hide');
      } else {
        this.setState({
          name: '',
          description: '',
          image: null,
          errors: null,
          changeImage: false
        });
      }
      if (this.props.combo.id) {
        this.props.handleAfterUpdated(response.data.combo);
      } else {
        this.props.handleAfterSaved(response.data.combo);
      }
    })
    .catch(error => this.setState({errors: error.response.data.errors}));
  }
}
