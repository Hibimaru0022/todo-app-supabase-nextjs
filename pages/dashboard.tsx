import { NextPage } from 'next'
import {
  DocumentTextIcon,
  LogoutIcon,
  StatusOfflineIcon,
} from '@heroicons/react/solid'
import { supabase } from '../utils/supabase'
import { Layout } from '../components/Layout'
import { TaskList } from '../components/TaskList'
import { TaskForm } from '../components/TaskForm'
import { NoticeForm } from '../components/NoticeForm'
import { NoticeList } from '../components/NoticeList'

const Dashboard: NextPage = () => {
  const signOut = () => {
    supabase.auth.signOut()
  }
  return (
    <Layout title="Dashboard">
      <LogoutIcon
        className="text-blue mb-6 h-6 w-6 cursor-pointer"
        onClick={signOut}
      />
      <div className="grid grid-cols-2 gap-40">
        <div>
          <div className="my-3 flex justify-center">
            <DocumentTextIcon className="jusrify-center my-3 flex" />
          </div>
          <TaskForm />
          <TaskList />
        </div>
        <div className="my-3 flex justify-center">
          <StatusOfflineIcon className="h-8 w-8 text-blue-500" />
        </div>
        <NoticeForm />
        <NoticeList />
      </div>
    </Layout>
  )
}

export default Dashboard
