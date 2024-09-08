import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Logo from "../../assets/images/logoNav.png";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faUser,
  faChartBar,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";
import { bannerReducer } from "../../Features/bannerSlice";
import MoreDetails from "../MoreDetails/MoreDetails";

const setNavVisibility = (isVisible) => ({
  type: "SET_NAV_VISIBILITY",
  payload: isVisible,
});

export default function Nav() {
  const [isModal, setIsModel] = useState(false)
  const [isShow, setIsShow] = useState(false);
  const navigateRef = useRef(null);
  const dispatch = useDispatch();
  const handelModal = () => {
    setIsModel(!isModal)
  }

  useEffect(() => {
    const iconBar = document.querySelector(".iconBar");
    const modal = document.querySelector(".modal");

  
      iconBar.addEventListener("click", () => {
        modal.classList.add("show");
      })
    
    
        modal.addEventListener("click", () => {
          modal.classList.remove("show");
        })
      
    
    


    const navigate = navigateRef.current;

    const handleScroll = () => {
      const isVisible = window.scrollY > 50;
      if (isVisible) {
        navigate.classList.add("show");
      } else {
        navigate.classList.remove("show");
      }
      dispatch(setNavVisibility(isVisible));
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    
  }, [dispatch]);

  const handleShow = () => {
    setIsShow(true);
  };

  const handleClose = () => {
    setIsShow(false);
  };

  return (
    <nav ref={navigateRef} id="navigate">
      <div>
        <img className="logo-of-nav" src={Logo} alt="Site Logo" />
      </div>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/GalleryP">Gallery</Link>
        </li>
        <li>
          <Link to="/ScheduleP">Schedule</Link>
        </li>
        <li>
          <Link to="/BlogP">Blog</Link>
        </li>
        <li>
          <Link to="/PricingP">Pricing</Link>
        </li>
        <li>
          <Link to="/ClassesP">Classes</Link>
        </li>
        <li>
          <Link to="/ContactP">Contact</Link>
        </li>
      </ul>

      <div className="right-nav">
      <FontAwesomeIcon className="iconBar" icon={faBars} onClick={handelModal} />
        <Link to="/LoginP">
          <FontAwesomeIcon className="icon-nav" icon={faUser} />
        </Link>
        <FontAwesomeIcon
          className="icon-nav chartbar"
          icon={faChartBar}
          onClick={handleShow}
        />
        <div className="join">
          <Link to="/ContactP">
            <FontAwesomeIcon className="icon-plus" icon={faCirclePlus} />
          </Link>
          <Link to="/ContactP">
            <h2>Join Right Now</h2>
          </Link>
        </div>
      </div>

      {isShow ? <MoreDetails isShow={isShow} onClose={handleClose} />:""}
       
       
    
      <div className="modal">
        <FontAwesomeIcon className="closemodal" icon={faXmark} onClick={handelModal} />
          <ul >
          
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/GalleryP">Gallery</Link>
        </li>
        <li>
          <Link to="/ScheduleP">Schedule</Link>
        </li>
        <li>
          <Link to="/BlogP">Blog</Link>
        </li>
        <li>
          <Link to="/PricingP">Pricing</Link>
        </li>
        <li>
          <Link to="/ClassesP">Classes</Link>
        </li>
        <li>
          <Link to="/ContactP">Contact</Link>
        </li>
      </ul> 
      </div>
    
      
    

    </nav>
  );
}
