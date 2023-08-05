import { gql } from "@apollo/client";

export const CREATE_APPLICATION = gql`
  mutation createApplication(
    $userId: String!
    $email: String!
    $name: String!
    $surname: String!
    $phoneNumber: String!
    $address: String!
    $postalCode: String
    $country: String!
    $municipalAcc: String
    $race: String!
    $houseHoldHead: Boolean
    $maritalStatus: Boolean
    $dependents: Boolean
    $bankStatement: String
    $idBook: String
    $affidavid: String
  ) {
    createApplication(
      applicationInput: {
        userId: $userId
        name: $name
        surname: $surname
        email: $email
        phoneNumber: $phoneNumber
        address: $address
        postalCode: $postalCode
        country: $country
        municipalAcc: $municipalAcc
        race: $race
        houseHoldHead: $houseHoldHead
        maritalStatus: $maritalStatus
        dependents: $dependents
        bankStatement: $bankStatement
        idBook: $idBook
        affidavid: $affidavid
      }
    ) {
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
  }
`;
