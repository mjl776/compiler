import React from 'react';
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import './signUp.css';
import { auth } from "../firebase/firebase";