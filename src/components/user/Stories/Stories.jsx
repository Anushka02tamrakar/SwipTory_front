
import React from "react";
import styles from "./Stories.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getStoriesByUser } from "../../story/storyAPI";
import { useSelector } from "react-redux";
import Story from "../../story/StoryCard/StoryCard";
import Loader from "../../common/Loader/Loader";
import Button from "../../common/Button/Button";

const Stories = () => {
    const navigate = useNavigate();
    const { userStories, storiesLoading } = useSelector((state) => state.story);
    const { userId, isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStoriesByUser(userId));
    }, []);

    if (!isAuthenticated) {
        return <h1 className={styles.heading}>Please Login to see your Stories</h1>;
    }

    if (storiesLoading) {
        return <Loader></Loader>;
    }

    return (
        <div>
            <h1 className={styles.heading}>Your Stories</h1>
            <div className={styles.Stories}>
                {userStories.length > 0 ? (
                    userStories.map((story) => (
                        <Story key={story._id} story={story} category="All" />
                    ))
                ) : (
                    <Button text={"Go to Home"} myFunction={() => navigate("/")} />
                )}
            </div>
        </div>
    );
};

export default Stories;
