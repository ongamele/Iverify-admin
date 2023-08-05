import { gql } from "@apollo/client";

export const GET_APPLICATIONS = gql`
  query getApplications {
    getApplications {
      userId
      name
      surname
      phoneNumber
      address
      postalCode
      country
      municipalAcc
      race
      houseHoldHead
      maritalStatus
      dependents
      bankStatement
      idBook
      affidavid
  }
`;
