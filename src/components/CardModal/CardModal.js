import React from 'react'
import { Image, Modal } from 'semantic-ui-react'
import './CardModal.css'


class CardModal extends React.Component  {

  render() {
    if(this.props.card.imageUrl) {
      return(
        <Modal style={{border: '5px solid white'}} size={'small'} trigger={<Image style={{margin: '5px', display: 'inline'}} src={this.props.card.imageUrl} alt={this.props.card.name} rounded />}>
          <Modal.Header style={{backgroundColor: 'grey'}}>{this.props.card.name}</Modal.Header>
          <Modal.Content style={{backgroundColor: 'grey'}} image>
            <Image wrapped size='medium' src={this.props.card.imageUrl} />
            <Modal.Description>
              <p style={{fontWeight: 'bold'}}>{this.props.card.type}</p>
              <p style={{fontWeight: 'bold'}}>{this.props.card.rarity}</p>
              {this.props.card.set ? <p>Set: {this.props.card.set}</p> : null}
              <p>{this.props.card.text}</p>
              <p style={{fontStyle: 'italic'}}>{this.props.card.flavor}</p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      )
    } else{
      return(null)
    }
  }

}

export default CardModal
