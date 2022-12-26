import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavLink from "../NavAccess";
import { useNavigate } from "react-router-dom";
import SButton from "../Button";
import {
  accessCategories,
  accessTalents,
  accessEvents,
  accessParticipant,
  accessPayments,
  accessOrders,
} from "../../const/access";

function SNavbar() {
  const navigate = useNavigate();
  const [role, setRole] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      let { role } = localStorage.getItem("auth")
        ? JSON.parse(localStorage.getItem("auth"))
        : {};

      setRole(role);
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home" className="mx-4">
        Bootcamp BWA
      </Navbar.Brand>
      <Nav activeKey="/categories" className="me-auto">
        <NavLink
          role={role}
          roles={accessCategories.lihat}
          action={() => navigate("/")}
        >
          Home
        </NavLink>
        <NavLink
          role={role}
          roles={accessCategories.lihat}
          action={() => navigate("/categories")}
        >
          Categories
        </NavLink>
        <NavLink
          role={role}
          roles={accessTalents.lihat}
          action={() => navigate("/talents")}
        >
          Talents
        </NavLink>
        <NavLink
          role={role}
          roles={accessPayments.lihat}
          action={() => navigate("/payments")}
        >
          Payment
        </NavLink>
        {/* <NavLink
          role={role}
          roles={organizers.lihat}
          action={() => navigate("/organizers")}
        >
          Oranizer
        </NavLink> */}
        <NavLink
          role={role}
          roles={accessEvents.lihat}
          action={() => navigate("/events")}
        >
          Events
        </NavLink>
        <NavLink
          role={role}
          roles={accessParticipant.lihat}
          action={() => navigate("/participant")}
        >
          Participant
        </NavLink>
        <NavLink
          role={role}
          roles={accessOrders.lihat}
          action={() => navigate("/orders")}
        >
          Orders
        </NavLink>
      </Nav>
      <Nav className="justify-content-end mx-4">
        <SButton variant="primary" size="sm" action={handleLogout}>
          Logout
        </SButton>
      </Nav>
    </Navbar>
  );
}

export default SNavbar;
