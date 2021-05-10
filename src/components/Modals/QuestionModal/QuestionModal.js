import React from 'react';
import PropTypes from 'prop-types';
import 'rc-color-picker/assets/index.css';
import { Typography, Modal, Button, TextField } from '@material-ui/core';
import './QuestionModal.scss';
import RadioGroup from '../../RadioGroup';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

class QuestionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentType: '',
      curRadioValue: '',
      mainDesc: this.props.contentDesc,
      time: '',
      textValue: '',
    };
  }

  closeModal = () => {
    this.props.onClose();
  };

  onNext = () => {
    if (this.state.curRadioValue === '') return;

    if (this.props.modalType === 'second') {
      if (this.state.contentType === '') {
        if (Number(this.state.curRadioValue) === 0) {
          this.setState({
            contentType: this.state.curRadioValue,
          });
        } else {
          this.props.onConfirm('');
        }
      } else {
        console.log(
          'send text value from question modal',
          this.state.textValue,
        );
        this.props.onConfirm(this.state.textValue);
        this.setState({
          contentType: '',
        });
      }
    } else {
      if (this.state.contentType === '') {
        this.setState({
          contentType: this.state.curRadioValue,
          mainDesc: this.props.options[parseInt(this.state.curRadioValue)]
            .content,
          time: this.props.options[parseInt(this.state.curRadioValue)].time,
        });
        this.props.onConfirm(
          this.props.options[parseInt(this.state.curRadioValue)],
        );
      } else {
        this.setState({
          contentType: '',
        });
        this.props.onConfirm('');
      }
    }
  };

  setCurValue = value => {
    this.setState({
      curRadioValue: value,
    });
  };

  renderResultView = () => {
    const { modalType, options } = this.props;

    if (this.state.contentType === '') {
      return (
        <RadioGroup title="" options={options} changeValue={this.setCurValue} />
      );
    } else if (modalType === 'second') {
      return (
        <>
          <TextField
            className="question-modal-textfield"
            variant="outlined"
            label="Question"
            multiline
            rows="4"
            value={this.state.textValue}
            onChange={e =>
              this.setState({
                textValue: e.target.value,
              })
            }
          />
        </>
      );
    } else {
      return (
        <>
          <Typography className="time-text-1" component="div">
            {this.state.time}
          </Typography>
          {this.state.time && (
            <Typography className="time-text-2" component="div">
              {this.context.t('time-desc')}
            </Typography>
          )}
        </>
      );
    }
  };

  render() {
    const { title, titleDesc, contentDesc, options } = this.props;

    return (
      <Modal
        className="questionModal"
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.props.isOpened}
        // onClose={this.closeModal}
      >
        <div style={getModalStyle()} className={'paper'}>
          <div className="header">
            <Typography
              variant="title"
              id="modal-title"
              className="header-title"
            >
              {title}
            </Typography>
            <Typography
              variant="title"
              id="modal-title"
              className="help-tooltip"
            >
              {titleDesc}
            </Typography>
          </div>
          <hr />
          <div className="content">
            <Typography
              className={
                this.state.contentType === '' ? 'description' : 'description-2'
              }
              component="div"
            >
              {this.state.mainDesc}
            </Typography>
            {this.renderResultView()}
          </div>
          <div className="footer">
            <Button
              className="next-but"
              variant="contained"
              onClick={this.onNext}
              size="large"
            >
              {this.state.contentType === '' && this.context.t('next')}
              {this.state.contentType !== '' && this.context.t('continue')}
            </Button>
          </div>
        </div>
      </Modal>
    );
  }
}

QuestionModal.propTypes = {
  isOpened: PropTypes.bool,
  title: PropTypes.string,
  titleDesc: PropTypes.string,
  contentDesc: PropTypes.string,
  options: PropTypes.array,
  modalType: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

QuestionModal.defaultProps = {
  modalType: 'normal',
};

QuestionModal.contextTypes = {
  t: PropTypes.func,
};

export default QuestionModal;
