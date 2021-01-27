import React, { useEffect, useState } from 'react';
import Page from "./../components/Page";
import { getInquiry } from "./../actions/inquiry.actions";
import { useDispatch, useSelector } from 'react-redux';

const Inquiry = props => {

    const dispatch  = useDispatch();
    const {inquiry,error}   = useSelector(state => state.inquiry);
    
    useEffect(() => {
        dispatch(getInquiry())
    },[])
    
    return (
        <Page>
            <div className="pricing-header px-3 py-3 pt-md-3 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Inquiry</h1>
            </div>
            {
                (error!==null)? (
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                        )
                :null
            }
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Broker Name</th>
                        <th scope="col">Contact No</th>
                        <th scope="col">Date</th>
                        <th scope="col">Type</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        inquiry?inquiry.map((item)=>{
                                return (
                                    <tr key={item.id}>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.broker_name}</td>
                                        <td>{item.contact_no}</td>
                                        <td>{item.date}</td>
                                        <td>{item.type}</td>
                                    </tr>                                    
    
                                )
                            })
                        :null
                    }
                </tbody>
            </table>
        </Page>
    )
}
export default Inquiry