import React from "react"
import { Button, Modal } from "react-bootstrap";
import defaultavatar from '../../assets/images/avatar-blue.png';



class ContactDelete extends React.Component {
  

    toggleModal = () => {
        this.props.closeDeleteModal();
      };
      DeleteContact=async()=>{
      
        try{
            await fetch('/api/contacts/delete/'+this.props.data.contact_id,{method:'DELETE'})
            this.toggleModal()
            this.props.setVisible(false)
       window.location.href='/'
          // if(this.props.contactListData.contacts.length>0){
           
          //   this.props.setData(this.props.contactListData.contacts[0]);
          
          // }else{
          //   this.props.setData({});
          // }
          
       
        }
        catch(err){
            console.log(err)
        }

      }

    render(){

        return (
           <>
             <Modal
        {...this.props}
        show={this.props.toggleDeleteModal}
        onHide={this.toggleModal}
        backdrop="static"
        keyboard={false}
        size="sm"
        className="rounded modal-dialog-scrollable"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete Contact
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="text-center">
            <p className="mb-3">Are you Sure to Delete this contact?</p>
<img src={this.props.data.avatar?this.props.data.avatar:defaultavatar} className="avatar rounded-circle" />
<h5>
{this.props.data.contact_name} 
</h5>

        </Modal.Body>
        <Modal.Footer className=" mx-auto">
      
          <Button variant="secondary" onClick={this.toggleModal}>Close</Button>
          <Button variant="danger" onClick={()=>{this.DeleteContact()}}>Delete</Button>
        </Modal.Footer>
      </Modal>
           </>
        )
    }
      
  
}

export default ContactDelete
