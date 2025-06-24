import React from "react";

export const TodoFilter = ({ activeTab, setActiveTab }) => {
    return(
  <nav>
    <div
      className="nav nav-tabs mt-3 d-flex justify-content-between"
      id="nav-tab"
      role="tablist"
      style={{ justifyContent: "space-betweenad" }}
    >
      <button
        className={`nav-link${activeTab === "all" ? " active" : ""}`}
        id="nav-home-tab"
        type="button"
        role="tab"
        aria-controls="nav-home"
        aria-selected={activeTab === "all"}
        onClick={() => setActiveTab("all")}
      >
        All
      </button>
      <button
        className={`nav-link${activeTab === "progress" ? " active" : ""}`}
        id="nav-profile-tab"
        type="button"
        role="tab"
        aria-controls="nav-profile"
        aria-selected={activeTab === "progress"}
        onClick={() => setActiveTab("progress")}
      >
        Progress
      </button>
      <button
        className={`nav-link${activeTab === "complete" ? " active" : ""}`}
        id="nav-contact-tab"
        type="button"
        role="tab"
        aria-controls="nav-contact"
        aria-selected={activeTab === "complete"}
        onClick={() => setActiveTab("complete")}
      >
        Complete
      </button>
    </div>
  </nav>
)}