import React, { useState } from "react";

// form
const ResourceForm = ({ onFormSubmit, initialData }) => {
  const DEFAULT_VAL = {
    title: "",
    description: "",
    link: "",
    priority: "",
    time: "60",
  };
  const [form, setForm] = useState(initialData || DEFAULT_VAL);

  const resetForm = () => {
    setForm(DEFAULT_VAL);
  };

  const submitForm = () => {
    onFormSubmit(form);
  };
  return (
    <>
      <div className="resource-form">
        <form>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input
                value={form.title}
                onChange={(e) => {
                  setForm({ ...form, title: e.target.value });
                }}
                className="input"
                type="text"
                placeholder="Learn Next JS and Sanity IO"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea
                onChange={(e) => {
                  setForm({ ...form, description: e.target.value });
                }}
                value={form.description}
                name="description"
                className="textarea"
                placeholder="Learn these technologies because they are very popular and enable better SEO"
              ></textarea>
            </div>
          </div>
          <div className="field">
            <label className="label">Link</label>
            <div className="control">
              <input
                value={form.link}
                onChange={(e) => {
                  setForm({ ...form, link: e.target.value });
                }}
                name="link"
                className="input"
                type="text"
                placeholder="https://academy.eincode.com"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Priority</label>
            <div className="control">
              <div className="select">
                <select
                  name="priority"
                  value={form.priority}
                  onChange={(e) => {
                    setForm({ ...form, priority: e.target.value });
                  }}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Time to finish</label>
            <div className="control">
              <input
                onChange={(e) => {
                  setForm({ ...form, time: e.target.value });
                }}
                value={form.time}
                name="time"
                className="input"
                type="number"
                placeholder="60"
              />
            </div>
            <p className="help">Time is in minutes</p>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button
                onClick={submitForm}
                type="button"
                className="button is-link"
              >
                Submit
              </button>
            </div>
            <div className="control">
              <button
                onClick={resetForm}
                type="button"
                className="button is-link is-light"
              >
                Reset Form
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ResourceForm;
