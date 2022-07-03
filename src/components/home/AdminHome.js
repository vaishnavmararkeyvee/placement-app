import React from 'react'
import AdminNav from '../header/AdminNav'
import Footer from '../footer/Footer';

const AdminHome = () => {
  return (
    <div>
      <AdminNav />
      <img style={{width:'100%'}} src="https://thumbs.dreamstime.com/b/admin-message-working-office-table-background-93379017.jpg" alt="cover" />
      <h1 style={{top:'20%',left:'10%',position:'absolute',color:'darkcyan'}}>WELCOME ADMIN</h1>
      <Footer />
    </div>
  )
}

export default AdminHome;