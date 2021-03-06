import React from 'react';
import { Col, Layout, Row } from 'antd';
import Button from 'Components/Button';
import { BottomBar, UploadWrapper } from './styled';
import UploadButton from '../components/UploadButton';
import { useDispatch } from 'react-redux';
import { uploadActions } from '../reducer/uploadReducer';
import UploadProgress from '../components/UploadProgress';

const UploadPage: React.FC = () => {
  const dispatch = useDispatch();
  const { Content } = Layout;
  //TODO: add setAlbumName, InputLine Component

  const handleAttachFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(uploadActions.setUploadFile(e.target.files));
  };

  return (
    <Layout>
      <UploadWrapper>
        <Content>
          <h2 style={{ marginBottom: '2%' }}>Upload Photos</h2>
          <hr />
          <Row justify="center" align="middle">
            <Col style={{ marginTop: '15%' }}>
              <UploadButton onChange={handleAttachFile} />
            </Col>
          </Row>
        </Content>
      </UploadWrapper>
      <UploadProgress />
      <BottomBar>
        <Button style={{ backgroundColor: '#5A36CC' }}>Upload Photo </Button>
      </BottomBar>
    </Layout>
  );
};

export default UploadPage;
