import React from "react";
import styles from "./StoryForm.module.css";

import { categories } from "../../../constants";

const SlideForm = ({ slide, slideIndex, handleChange }) => {
    return (
        <div className={styles.slideForm}>
            <div className={styles.slideForm__content}>
                <div className={styles.input_container}>
                    <label className={styles.slideForm__label}>Heading : </label>
                    <input
                        className={styles.slideForm__input}
                        type="text"
                        name={`heading`}
                        value={slide.heading}
                        placeholder="Your Heading"
                        onChange={(e) => handleChange(e, slideIndex)}
                    />
                </div>
                <div className={styles.input_container}>
                    <label className={styles.slideForm__label}>Description : </label>
                    <input
                        className={styles.slideForm__input}
                        type="text"
                        name={`description`}
                        value={slide.description}
                        placeholder="Story Description"
                        onChange={(e) => handleChange(e, slideIndex)}
                    />
                </div>
                <div className={styles.input_container}>
                    <label className={styles.slideForm__label}>Image URL : </label>
                    <input
                        className={styles.slideForm__input}
                        type="text"
                        name={`imageUrl`}
                        value={slide.imageUrl}
                        placeholder="Add Image URL"
                        onChange={(e) => handleChange(e, slideIndex)}
                    />
                </div>

                <div className={styles.input_container}>
                    <label className={styles.slideForm__label}>Category : </label>

                    <select
                        className={styles.slideForm__input}
                        name="category"
                        onChange={(e) => handleChange(e, slideIndex)}
                        value={slide.category}
                    >
                        <option value="" style={{ color: "#847c7c" }}>
                            Select Category
                        </option>
                        {categories.map((category, slideIndex) => (
                            <option key={slideIndex} value={category}>
                                {category[0].toUpperCase() + category.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default SlideForm;