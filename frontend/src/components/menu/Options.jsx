import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function CustomDropdown({title, items}) {
  return (
    <Dropdown
      data-bs-theme="dark"
      style={{
        margin: "15px",
      }}>
      <Dropdown.Toggle
        id={`dropdown-button-${title}`}
        variant="secondary"
        style={{
          backgroundColor: "#007F73",
          border: "3px solid #4CCD99",
          borderRadius: "50px",
        }}>
        {title}
      </Dropdown.Toggle>

      <Dropdown.Menu style={{textAlign: "center"}}>
        {items.map((item, index) => (
          <Dropdown.Item key={index} href={item.href} active={item.active}>
            {item.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
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
    },
    // मालियाबाग
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
    },
  ];

  return (
    <>
      <div
        className="dropdown-list"
        style={{
          display: "flex",
          overflow: "auto",
        }}>
        {dropdownData.map((dropdown, index) => (
          <div className="Item" style={{}}>
            <CustomDropdown
              key={index}
              title={dropdown.title}
              items={dropdown.items}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Options;
