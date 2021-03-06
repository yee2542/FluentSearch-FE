import React, { useEffect } from 'react';
import { columns } from 'Modules/task/models/constant';
import { PurpleTable, PageWrapper } from 'Styles/global';
import { fetchTaskData } from '../reducer/taskReducer/actions';
import { useDispatch, useSelector } from 'react-redux';
import { StoresState } from 'Stores/index';
import LayoutWithSearch from 'Components/Layouts/LayoutWithSearch';
const TaskPage: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTaskData());
  }, []);
  const taskData = useSelector((state: StoresState) => state.task);
  return (
    <LayoutWithSearch title="Tasks">
      <PageWrapper>
        <PurpleTable
          dataSource={taskData.data}
          columns={columns}
          style={{ marginTop: '30px' }}
          pagination={{ position: ['bottomCenter'] }}
        />
      </PageWrapper>
    </LayoutWithSearch>
  );
};

export default TaskPage;
