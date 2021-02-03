import React, {ReactElement, useState} from "react";
import {List, ListItem, Paper} from "@material-ui/core";
import {empty, gql, useMutation, useQuery} from "@apollo/client";
import CustomUserItem from "../../global/viewholder/CustomUserItem";
import "./ListAllUser.css"


const ListAllUser = (): ReactElement => {

    const ALL_USER = gql`
        query {
            fetchAll {
                _id
                lastName
                firstName
                email
            }
        }
    `;
    const { loading, error, data } = useQuery(ALL_USER);
    console.log(data)
    if (loading) console.log( 'Loading...')

    return (
       <List>
           {
               data !== undefined ? data.fetchAll.map((user: any) => {
                   return <Paper className="margin-list-item"><CustomUserItem  user={user}/></Paper>
               }) : ""
           }
       </List>
    )

}

export default ListAllUser
