import React from "react";

import "./account-settings.scss";

import AccountInfo from "../../containers/AccountInfo/AccountInfo";
import ChatSettings from "../../containers/ChatSettings/ChatSettings";

function AccountSettings({ isVisible }) {
   const hiddenClass = isVisible ? "" : "hidden";
   return (
      <div className={`account-settings ${hiddenClass}`}>
         <AccountInfo onFriendAdd />
         <ChatSettings onDownloadKeys onUploadKeys onDeleteAccount />
      </div>
   );
}

export default AccountSettings;
