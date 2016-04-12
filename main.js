// This does not seem to make React available globally. . . why?
import React from 'react'
import ReactDOM from 'react-dom'

// Main entry point for browser bundle
import spa from './js/spa';

// Start the SPA
spa($('#spa'));
