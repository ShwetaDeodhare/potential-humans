import React from 'react'
import {Col, UncontrolledCollapse, Button, Card, FormGroup, Input, Label, CustomInput } from 'reactstrap'
import accepted from './../../accepted.svg';
import rejected from './../../rejected.svg';



const humans = [
	{
		id: '1',
		firstName:'Lucifer',
        lastName: 'Morningstar',
        email: 'luci@lux.com',
        phoneNumber: '9666666666',
        status: true
	},
	{
        id: '2',
		firstName:'Jake',
        lastName: 'Peralta',
        email: 'jake.peralta@nypd.com',
        phoneNumber: '9898989898',
        status: true
	},
    {
        id: '3',
		firstName:'Amy',
        lastName: 'Santiago',
        email: 'amy.santiago@nypd.com',
        phoneNumber: '8989898989',
        status: false
	},
    {
        id: '4',
		firstName:'Ethan',
        lastName: 'Hunt',
        email: 'ethan.hunt@mi.com',
        phoneNumber: '9990009990',
        status: true
	},
    {
        id: '5',
		firstName:'John',
        lastName: 'McClane',
        email: 'john.mcclane@diehard.com',
        phoneNumber: '9876598765',
        status: false
	},
]

const HumanList = () => {
	return (
        <>
            <div>
                <Button color="link" id="toggler" className="my-3">
                    Add Person
                </Button>
                <UncontrolledCollapse toggler="#toggler">
                    <Card body>
                        <FormGroup row className="mb-2">
                            <Label size="sm" sm={2} for="firstName">First Name</Label>
                            <Col sm={10}>
                                <Input bsSize="sm" type="text" name="firstName" id="firstName" placeholder="Your First Name" />
                            </Col>
                        </FormGroup>
                        <FormGroup row className="mb-2">
                            <Label size="sm" sm={2} for="lastName">Last Name</Label>
                            <Col sm={10}>
                                <Input bsSize="sm" type="text" name="lastName" id="lastName" placeholder="Your Last Name" />
                            </Col>
                        </FormGroup>
                        <FormGroup row className="mb-2">
                            <Label size="sm" sm={2} for="userEmail">Email</Label>
                            <Col sm={10}>
                                <Input bsSize="sm" type="email" name="email" id="userEmail" placeholder="a@a.com" />
                            </Col>
                        </FormGroup>
                        <FormGroup row className="mb-2">
                            <Label size="sm" sm={2} for="userPhone">Phone Number</Label>
                            <Col sm={10}>
                                <Input bsSize="sm" type="text" name="password" id="userPhone" placeholder="98xxxxxx00" />
                            </Col>
                        </FormGroup>
                        <FormGroup row className="mb-2">
                            <Label size="sm" sm={2} for="exampleCheckbox">Status</Label>
                            <Col sm={10}>
                                <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Is Active" />
                            </Col>
                        </FormGroup>
                        <Button color="primary" size="sm">Save</Button>
                    </Card>
                </UncontrolledCollapse>
            </div>
            <ul className='ace-collapse list-unstyled px-4 py-4'>
                <li className='border-bottom row'>
                    <Col sm={1} className="py-2 bg-info">{'#'}</Col>
                    <Col sm={2} className="py-2 bg-info">{'First Name'}</Col>
                    <Col sm={2} className="py-2 bg-info">{'Last Name'}</Col>
                    <Col sm={3} className="py-2 bg-info">{'Email'}</Col>
                    <Col sm={2} className="py-2 bg-info">{'Contact #'}</Col>
                    <Col sm={2} className="py-2 bg-info">{'Status'}</Col>
                </li>
                {humans.map((listItem, listItemIndex) => {
                    return (
                        <li className='border-bottom row' key={listItemIndex.toString()}>
                            <Col sm={1} className="py-2">{listItem.id}</Col>
                            <Col sm={2} className="py-2">{listItem.firstName}</Col>
                            <Col sm={2} className="py-2">{listItem.lastName}</Col>
                            <Col sm={3} className="py-2">{listItem.email}</Col>
                            <Col sm={2} className="py-2">{listItem.phoneNumber}</Col>
                            <Col sm={2} className="py-2">
                                {listItem.status === false ? 
                                <span className="text-danger">
                                    <img src={rejected} className="img-fluid status-img" alt="user inactive"/>
                                     Inactive</span>
                                : 
                                <span className="text-success">
                                    <img src={accepted} className="img-fluid status-img" alt="user active"/>
                                    Active
                                </span>
                                }
                            </Col>
                        </li>
                    )
                })}
                <li className="row">
                    <Button color="link" className="p-0 py-1 w-100 text-right">View All</Button>
                </li>
            </ul>
        </>
	)
}

export default HumanList
