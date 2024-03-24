import React from 'react'
import PageTitle from '../../components/PageTitle'
import { Tabs } from 'antd'

const Profile = () => {
  return (
    <div>
      <PageTitle title="Admin" />
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Bookings" key="1">
          <h1>This is Bookings</h1>
        </Tabs.TabPane>

        <Tabs.TabPane tab="Apply for Theater" key="2">
          <h1>Apply for theaters</h1>
        </Tabs.TabPane>
      </Tabs>
    </div>
  )
}

export default Profile
