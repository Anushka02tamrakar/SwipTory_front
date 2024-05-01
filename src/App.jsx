import './App.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { loadUser } from './components/auth/authAPI';
import { REGISTER, LOGIN, ADD_STORY, EDIT_STORY } from './constants';

import Home from './pages/Home';
import Bookmarks from './pages/Bookmarks';
import Loader from './components/common/Loader/Loader';
import Stories from './components/user/Stories/Stories';
import Auth from './components/auth/Auth';
import Navbar from './components/Navbar/Navbar';
import Modal from './components/Modal/Modal';
import AddStory from './components/story/StoryForm/StoryAdd';
import EditStory from './components/story/StoryForm/StoryEdit';
import ViewStory from './components/story/StoryDetail/StoryDetail';
const App = () => {
  const dispatch = useDispatch();
  const { modalContent } = useSelector((state) => state.modal);
  const { loading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <>
      <Navbar />

      {modalContent === REGISTER && (
        <Modal>
          <Auth />
        </Modal>
      )}
      {modalContent === LOGIN && (
        <Modal>
          <Auth />
        </Modal>
      )}
      {modalContent === ADD_STORY && (
        <Modal>
          <AddStory />
        </Modal>
      )}
      {modalContent === EDIT_STORY && (
        <Modal>
          <EditStory />
        </Modal>
      )}

      <ToastContainer></ToastContainer>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/story/:id"
          element={
            <Modal>
              <ViewStory />
            </Modal>
          }
        />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/my/stories" element={<Stories />} />
      </Routes>
    </>
  );
};


export default App
