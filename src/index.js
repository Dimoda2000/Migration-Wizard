import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import DashboardPage from './Pages/DashboardPage'
import DDLViewPage from './Pages/DDLViewPage'
import ConversionPage from './Pages/ConversionPage'
import ExtractionPage from './Pages/ExtractionPage'
import ExtractedCodeViewPage from './Pages/ExtractedCodeViewPage'
import ConversionResultPage from './Pages/ConversionResultPage'
import FinalConversionResultPage from './Pages/FinalConversionResultPage'
import ServerSelectionPage from './Pages/ServerSelectionPage'
import ExtractionConversion from './Pages/ExtractionConversion'
import ProjectViewPage from './Pages/ProjectViewPage'
import AdminDashboard from './Pages/AdminDashboard'
// import Project_Tab from './P/Project_Tab';
import Table_Dashboard from './Pages/Table_Dashboard'
import ExtractionResult from './Pages/ExtractionResult'
import AuthenticationPage from './Pages/AuthenticationPage'
import Update_userDetail_page from  "./Pages/Update_userDetail_page"
import UserAccountTabpage from './Pages/UserAccountTabpage'
import CodeView from "./Pages/CodeView"
import ChangesUpdateFailSuccsess from "./Pages/ChangesUpdateFailSuccsess"
import ProjectTable from "./Pages/ProjectTablePage"
import ProjectTablePage from './Pages/ProjectTablePage';
import ExtractionProgressPage from './Pages/ExtractionProgressPage'
import AddserverPage2 from './Pages/AddserverPage2'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<LoginPage />} />  {/* Default route */}
        <Route path="LoginPage" element={<LoginPage />} />
        <Route path="RegisterPage" element={<RegisterPage />} />
        <Route path="DashboardPage" element={<DashboardPage />} />
        <Route path="DDLViewPage" element={<DDLViewPage />} />
        <Route path="ConversionPage" element={<ConversionPage />} />
        <Route path="ExtractionPage" element={<ExtractionPage />} />
        <Route path="ExtractedCodeViewPage" element={<ExtractedCodeViewPage />} />
        <Route path="ConversionResultPage" element={<ConversionResultPage />} />
        <Route path="FinalConversionResultPage" element={<FinalConversionResultPage />} />
        <Route path="ServerSelectionPage" element={<ServerSelectionPage />} />
        <Route path="ExtractionConversion" element={<ExtractionConversion />} />
        <Route path="ProjectViewPage" element={<ProjectViewPage />} />
        <Route path="AdminDashboard" element={<AdminDashboard />} />
        <Route path="Table_Dashboard" element={<Table_Dashboard />} />
        <Route path="ExtractionResult" element={<ExtractionResult />} />
        <Route path="AuthenticationPage" element={<AuthenticationPage />} />
        <Route path="Update_userDetail_page" element={<Update_userDetail_page />} />
        <Route path="UserAccountTabpage" element={<UserAccountTabpage />} />
        <Route path="CodeView" element={<CodeView />} />
        <Route path="ChangesUpdateFailSuccsess" element={<ChangesUpdateFailSuccsess />} />
        <Route path="CodeView" element={<CodeView />} />
        <Route path="ProjectTable" element={<ProjectTable />} />
        <Route path="ProjectTablePage" element={<ProjectTablePage />} />
        <Route path="ExtractionProgressPage" element={<ExtractionProgressPage />} />
        <Route path="AddserverPage2" element={<AddserverPage2 />} />

      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);