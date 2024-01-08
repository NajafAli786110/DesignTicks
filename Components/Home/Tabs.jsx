import React, { useState } from 'react';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <div className="tabs-container">
            <div className="tabs">
                <div
                    className={`tab ${activeTab === 1 && 'active'}`}
                    onClick={() => handleTabClick(1)}
                >
                    Tab 1
                </div>
                <div
                    className={`tab ${activeTab === 2 && 'active'}`}
                    onClick={() => handleTabClick(2)}
                >
                    Tab 2
                </div>
                <div
                    className={`tab ${activeTab === 3 && 'active'}`}
                    onClick={() => handleTabClick(3)}
                >
                    Tab 3
                </div>
            </div>

            <div className={`tab-content ${activeTab === 1 && 'active'}`}>
                <p>Content for Tab 1</p>
            </div>
            <div className={`tab-content ${activeTab === 2 && 'active'}`}>
                <p>Content for Tab 2</p>
            </div>
            <div className={`tab-content ${activeTab === 3 && 'active'}`}>
                <p>Content for Tab 3</p>
            </div>

            <style jsx>{`
        .tabs-container {
          max-width: 600px;
          margin: auto;
          padding: 20px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        }

        .tabs {
          display: flex;
          margin-bottom: 20px;
        }

        .tab {
          flex: 1;
          padding: 10px;
          text-align: center;
          cursor: pointer;
          background-color: #f0f0f0;
        }

        .tab.active {
          background-color: #fff;
        }

        .tab-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out;
        }

        .tab-content.active {
          max-height: 200px; /* Adjust the max-height based on your content */
        }
      `}</style>
        </div>
    );
};

export default Tabs;