import React, { useEffect, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

interface MatchParams {
  params: {
    id: string
  };
}
export const TabsPage: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string>('')
  const history = useHistory();
  const { path } = useRouteMatch();
  const match: MatchParams | null = useRouteMatch("/tabs/:id");

  useEffect(() => {
    const id: string = match?.params.id || ''
    setActiveKey(id)
  }, [match])


  function callback(key: string) {
    history.push(`${path}/${key}`)
  }

  return (
    <div className="card-container">
      <Tabs defaultActiveKey="1" activeKey={activeKey} onTabClick={(key) => callback(key)} type="card">
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  )
}