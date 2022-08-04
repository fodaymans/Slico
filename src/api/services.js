import React from 'react';

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://portal.slicoinsurance.com/slicoapi',
});

export const UserAPI = {
  getAll: function () {
    return axiosInstance.request({
      method: 'GET',
      url: `/api/v1/users`,
    });
  },

  login: function ({username, password}) {
    return axiosInstance.request({
      method: 'POST',
      url: `/api/Marketer/login?id=${username}&password=${password}`,
      timeout: 3000,
      data: {
        username: username,
        password: password,
      },
    });
  },



  loginCustomer: function ({username, password}) {
    return axiosInstance.request({
      method: 'POST',
      url: `/api/Customer/login?id=${username}`,
      timeout: 3000,
      data: {
        username: username,
      },
    });
  },



  getCustomers: function ({username}) {
    return axiosInstance.request({
      method: 'POST',
      url: `/api/Marketer/ViewCustomers?id=${username}`,
      timeout: 3000,
      data: {
        username: username,
      },
    });
  },

  getTotal: function ({username}) {
    return axiosInstance.request({
      method: 'POST',
      url: `/api/Marketer/TotalCustomer?id=${username}`,
      timeout: 3000,
      data: {
        username: username,
      },
    });
  },

  changePassWord: function ({mid,password}) {
    return axiosInstance.request({
      method: 'PUT',
      url: `/api/Marketer/changePass`,
      timeout: 3000,
      data: {
        MarketerID: mid,
        Password: password,
       
      },
    });
  },



  AddCustomerOffline: function ({
    Username,
    MarketerID,
    FirstName,
    MiddleName,
    LastName,
    Gender,
    DOB,
    BusinessLocation,
    Address,
    District,
    Premium,
    Telephone,
    Depid,
    Photo,
    ID
  }) {
    return axiosInstance.request({
      method: 'POST',
      url: `/api/Marketer/registerCustomer`,
      timeout: 3000,
      data: {
        Username: Username,
        MarketerID: MarketerID,
        FirstName: FirstName,
        MiddleName: MiddleName,
        LastName: LastName,
        Gender: Gender,
        DOB: DOB,
        BusinessLocation: BusinessLocation,
        Address: Address,
        District: District,
        Premium : Premium,
        Telephone: Telephone,
        Depid: Depid,
       
        Photo: Photo,
        ID : ID,

      
      },
    });
  },




  AddCustomer: function ({
    username,
    mid,
    Fname,
    MiddleName,
    Lname,
    checked,
    dateOfBirth,
    BusinessLocation,
    Address,
    SelectedValues,
    Pre,
    Telephone,
    rannumber,
    img,
    dateID
  }) {
    return axiosInstance.request({
      method: 'POST',
      url: `/api/Marketer/registerCustomer`,
      timeout: 3000,
      data: {
        Username: username,
        MarketerID: mid,
        FirstName: Fname,
        MiddleName: MiddleName,
        LastName: Lname,
        Gender: checked,
        DOB: dateOfBirth,
        BusinessLocation: BusinessLocation,
        Address: Address,
        District: SelectedValues,
         Premium : Pre,
        Telephone: Telephone,
        Depid: rannumber,
       
        Photo: img,
        ID : dateID,

      
      },
    });
  },




  AddDependantOffline: function ({
    Username,
    DID,
    FirstName,
    MiddleName,
    LastName,
    Gender,
    Address,
    Telephone,
    PercentageShared,
    Relationship,
    Status,
    DOB,
    ID
  }) {
    return axiosInstance.request({
      method: 'POST',
      url: `/api/Marketer/AddDependant`,
      timeout: 3000,
      data: {
        Username: Username,
        DID: DID,
        FirstName: FirstName,
        MiddleName: MiddleName,
        LastName: LastName,
        Gender: Gender,
        Address: Address,
        Telephone: Telephone,
        PercentageShared: PercentageShared,
        Relationship: Relationship,
        Status: Status,
        DOB: DOB,
        ID: ID
      },
    });
  },



  AddDependant: function ({
    username,
    vidno,
    Fname,
    Middlename,
    Lname,
    checked,
    Address,
    Telephonee,
    PercentageShared,
    selectedLanguage,
    Status,
    dateOfBirth,
    dateID
  }) {
    return axiosInstance.request({
      method: 'POST',
      url: `/api/Marketer/AddDependant`,
      timeout: 3000,
      data: {
        Username: username,
        DID: vidno,
        FirstName: Fname,
        MiddleName: Middlename,
        LastName: Lname,
        Gender: checked,
        Address: Address,
        Telephone: Telephonee,
        PercentageShared: PercentageShared,
        Relationship: selectedLanguage,
        Status: Status,
        DOB: dateOfBirth,
        ID: dateID
      },
    });
  },


  AddOfflineWitness: function ({
    Username,
    FirstName,
    MiddleName,
    LastName,
    Gender,
    Address,
    DID,
    Telephone,
    ID
  }) {
    return axiosInstance.request({
      method: 'POST',
      url: `/api/Marketer/AddWitness`,
      timeout: 3000,
      data: {
        Username: Username,
        FirstName: FirstName,
        MiddleName: MiddleName,
        LastName: LastName,
        Gender: Gender,
        Address: Address,
        DID: DID,
        Telephone: Telephone,
        ID: ID
      },
    });
  },

  AddWitness: function ({
    username,
    // mid,
    Fname,
    Middlename,
    Lname,
    checked,
    Address,
    vidsno,
    Telephonee,
    dateID
  }) {
    return axiosInstance.request({
      method: 'POST',
      url: `/api/Marketer/AddWitness`,
      timeout: 3000,
      data: {
        Username: username,
        // FFID: mid,
        FirstName: Fname,
        MiddleName: Middlename,
        LastName: Lname,
        Gender: checked,
        Address: Address,
        DID: vidsno,
        Telephone: Telephonee,
        ID: dateID
      },
    });
  },




  checKCommission: function ({dateFrom,dateTo, mid}) {
    return axiosInstance.request({
      method: 'POST',
      url: `/api/Marketer/ViewTotalCommission`,
      timeout: 3000,
      data: {
        FROM: dateFrom,
          MarketerID: mid,
        TO: dateTo,
      },
    });
  },


  checKPaid: function ({dateTo, mid}) {
    return axiosInstance.request({
      method: 'POST',
      url: `/api/Marketer/ViewUnPaidCustomer`,
      timeout: 3000,
      data: {
        // FROM: dateFrom,
        IDCode: mid,
        RegistrationDate: dateTo,
      },
    });
  },

  create: function (user) {
    return axiosInstance.request({
      method: 'POST',
      url: `/api/v1/users`,
      data: user,
    });
  },
  update: function (userId, user) {
    return axiosInstance.request({
      method: 'PUT',
      url: `/api/v1/users/${userId}`,
      data: user,
    });
  },
};
