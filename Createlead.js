import React, {Component} from 'react';
import { Link } from "react-router-dom"
import Viewleads from './Viewleads';
import Deletelead from './Deletelead';


class Createlead extends Component{
    constructor(props){
        super(props)
        this.state={
            leadInfo: [],
            leadname: "a",
            contactname: "a", 
            address: "a",
            counter: 0,
            contact: "",
            
        }
    }

newLead = e => {
    e.preventDefault();
    console.log("Huhu");
    let basic2 = {
        lead: this.state.leadname,
        contact: this.state.contactname,
        address: this.state.address,
        id: this.state.counter
    }
    this.state.counter++;
    document.getElementById("clear").reset();
    this.state.leadInfo.push(basic2);
    let tryThis = this.state.leadInfo.map((data) => <Viewleads info={data} updateContact={this.updateContact}/>);
    this.setState({contact: tryThis});
}


leadChange = ({target}) => {
    //console.log(this.state);
    this.setState({ [target.name]: target.value});
}

updateContact = (cheese) => {
    let myContact = this.state.leadInfo.find(contact => contact.id === cheese.id)
    myContact.lead = cheese.newLead
    myContact.address = cheese.newAddress
    myContact.contact = cheese.newContact 
    console.log(myContact)
    let tryThis = this.state.leadInfo.map((data) => <Viewleads info={data} updateContact={this.updateContact}/>);

    let newLead = this.state.leadInfo[0]
    let newerLead = Object.values(newLead)
    console.log(newerLead)
    console.log(this.state.leadInfo);
    console.log(tryThis);
    this.setState({contact: tryThis});
   
} 
handleDelete = (theId) => {
    const items = this.state.leadInfo.filter(contact => contact.id !== theId);
    this.setState({ theId: items });
}


    render(){
        return(
            <div>
                <form id="clear" onSubmit={this.newLead}>
                    <label for="leadname">Contact Name:</label>
                    <input type="text" name="contactname" onChange={this.leadChange}  />
                    <label for="leadname">Lead Name:</label>
                    <input type="text" name="leadname" onChange={this.leadChange} />
                    <label for="leadname">Address:</label>
                    <input type="text" name="address" onChange={this.leadChange}/>
                    <input type="submit" />
                </form>
                
                <Link to="Viewleads">View Leads</Link>
                {this.state.contact}
                <Deletelead  onDelete={this.handleDelete}/>
                
            </div>
        )
    }
}


export default Createlead;