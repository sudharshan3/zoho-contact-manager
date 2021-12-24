import React from "react"
import { Button, Modal } from "react-bootstrap";
import defaultavatar from '../../assets/images/avatar-blue.png';
class ContactPersonDelete extends React.Component {

    toggleModal = () => {
        this.props.closeDeleteModal();
      };
      DeleteContact=async()=>{
          
        try{
            const res =await fetch('/api/contacts/delete/'+this.props.contactdetails.contact_id+'/'+this.props.data.phone,{method:'DELETE'})
            const json = await res.json();    
            console.log(json,'.........')
            this.props.setAllcontactPerson(json.contact_persons)
         this.props.setData(json)
            this.toggleModal()
            this.props.setVisible(false)
            this.props.history.push({
              pathname: `/`           
          });
        }
        catch(err){
            console.log(err)
        }

      }

    render(){
      console.log(this.props.data)
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
            Delete Contact Person
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="text-center">
            <p className="mb-3">Are you Sure to Delete this contact?</p>
<h5>
{this.props.data.first_name} 
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

export default ContactPersonDelete
