import React, {useState} from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./Options.css";
import downArrow from "./img/expand.png";
import upArrow from "./img/collapse.png";

function CustomDropdown({title, items}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="list"
      style={{
        margin: "5px 0",
      }}>
      <Dropdown
        show={isOpen}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        style={{
          margin: "15px",
        }}>
        <Dropdown.Toggle
          id={`dropdown-button-${title}`}
          variant="secondary"
          style={{
            backgroundColor: "#4CCD99",
            border: "3px solid #007F73",
            borderRadius: "50px",
          }}
          onClick={() => setIsOpen(!isOpen)}>
          {title}
        </Dropdown.Toggle>

        <Dropdown.Menu
          style={{
            textAlign: "center",
            background: "transparent",
            border: "none",
            padding: "10px",
          }}>
          {items.map((item, index) => (
            <div className="item-section">
              <Dropdown.Item
                key={index}
                href={item.href}
                active={item.active}
                style={{
                  backgroundColor: "#4CCD99",
                  border: "3px solid #007F73",
                  borderRadius: "50px",
                  maxWidth: "100px",
                  color: "white",
                }}>
                {item.label}
              </Dropdown.Item>
            </div>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

function Options() {
  const dropdownData = [
    // संझौली
    {
      title: "संझौली",
      items: [
        {label: "छठ पूजा", href: "#/action-1", active: true},
        {label: "दुर्गा पूजा", href: "#/action-2"},
        {label: "राम नवमी", href: "#/action-3"},
        {label: "साईं पूजा", href: "#/action-4"},
      ],
    },
    // दलीपपुर
    {
      title: "दलीपपुर",
      items: [
        {label: "छठ पूजा", href: "#/action-1", active: true},
        {label: "दुर्गा पूजा", href: "#/action-2"},
        {label: "राम नवमी", href: "#/action-3"},
        {label: "साईं पूजा", href: "#/action-4"},
      ],
    },
    // दावथ
    {
      title: "दावथ",
      items: [
        {label: "छठ पूजा", href: "#/action-1", active: true},
        {label: "दुर्गा पूजा", href: "#/action-2"},
        {label: "राम नवमी", href: "#/action-3"},
        {label: "साईं पूजा", href: "#/action-4"},
      ],
    },
    // नोखा
    {
      title: "नोखा",
      items: [
        {label: "छठ पूजा", href: "#/action-1", active: true},
        {label: "दुर्गा पूजा", href: "#/action-2"},
        {label: "राम नवमी", href: "#/action-3"},
        {label: "साईं पूजा", href: "#/action-4"},
      ],
    },
    // सोनबर्षा
    {
      title: "सोनबर्षा",
      items: [
        {label: "छठ पूजा", href: "#/action-1", active: true},
        {label: "दुर्गा पूजा", href: "#/action-2"},
        {label: "राम नवमी", href: "#/action-3"},
        {label: "साईं पूजा", href: "#/action-4"},
      ],

      /** // मालियाबाग
    {
      title: "मालियाबाग",
      items: [
        {label: "छठ पूजा", href: "#/action-1", active: true},
        {label: "दुर्गा पूजा", href: "#/action-2"},
        {label: "राम नवमी", href: "#/action-3"},
        {label: "साईं पूजा", href: "#/action-4"},
      ],
    },
    // जगदीशपुर
    {
      title: "जगदीशपुर",
      items: [
        {label: "छठ पूजा", href: "#/action-1", active: true},
        {label: "दुर्गा पूजा", href: "#/action-2"},
        {label: "राम नवमी", href: "#/action-3"},
        {label: "साईं पूजा", href: "#/action-4"},
      ],
    },
    // पटना
    {
      title: "पटना",
      items: [
        {label: "छठ पूजा", href: "#/action-1", active: true},
        {label: "दुर्गा पूजा", href: "#/action-2"},
        {label: "राम नवमी", href: "#/action-3"},
        {label: "साईं पूजा", href: "#/action-4"},
      ],
    },
    // आरा
    {
      title: "आरा",
      items: [
        {label: "छठ पूजा", href: "#/action-1", active: true},
        {label: "दुर्गा पूजा", href: "#/action-2"},
        {label: "राम नवमी", href: "#/action-3"},
        {label: "साईं पूजा", href: "#/action-4"},
      ],
    },
    // गया
    {
      title: "गया",
      items: [
        {label: "छठ पूजा", href: "#/action-1", active: true},
        {label: "दुर्गा पूजा", href: "#/action-2"},
        {label: "राम नवमी", href: "#/action-3"},
        {label: "साईं पूजा", href: "#/action-4"},
      ],
    },
    // पीरो
    {
      title: "पीरो",
      items: [
        {label: "छठ पूजा", href: "#/action-1", active: true},
        {label: "दुर्गा पूजा", href: "#/action-2"},
        {label: "राम नवमी", href: "#/action-3"},
        {label: "साईं पूजा", href: "#/action-4"},
      ],
    },
    // भागलपुर
    {
      title: "भागलपुर",
      items: [
        {label: "छठ पूजा", href: "#/action-1", active: true},
        {label: "दुर्गा पूजा", href: "#/action-2"},
        {label: "राम नवमी", href: "#/action-3"},
        {label: "साईं पूजा", href: "#/action-4"},
      ],
    },
    // सासाराम
    {
      title: "सासाराम",
      items: [
        {label: "छठ पूजा", href: "#/action-1", active: true},
        {label: "दुर्गा पूजा", href: "#/action-2"},
        {label: "राम नवमी", href: "#/action-3"},
        {label: "साईं पूजा", href: "#/action-4"},
      ],
    },
    // बिक्रमगंज
    {
      title: "बिक्रमगंज",
      items: [
        {label: "छठ पूजा", href: "#/action-1", active: true},
        {label: "दुर्गा पूजा", href: "#/action-2"},
        {label: "राम नवमी", href: "#/action-3"},
        {label: "साईं पूजा", href: "#/action-4"},
      ],
    }, */
    },
  ];
  const [isListVisible, setIsListVisible] = useState(false);
  return (
    <>
      <div
        className="dropdown-list"
        style={{
          display: "flex",
          justifyContent: "center",
        }}>
        <button
          className="center-button"
          onClick={() => setIsListVisible(!isListVisible)}>
          <img
            width="34"
            height="34"
            src={isListVisible ? upArrow : downArrow}
            alt="dropdown-arrow"
          />
        </button>
      </div>

      {isListVisible && (
        <div
          className="dropdown-list"
          style={{
            display: "flex",
            justifyContent: "center",
          }}>
          {dropdownData.map((dropdown, index) => (
            <div className="Item" key={index}>
              <CustomDropdown title={dropdown.title} items={dropdown.items} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Options;
