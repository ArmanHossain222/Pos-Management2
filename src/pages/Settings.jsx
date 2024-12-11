import React, { useState } from "react";

const Settings = () => {
  const [profile, setProfile] = useState({
    username: "JohnDoe",
    email: "johndoe@example.com",
    password: "",
  });

  const [preferences, setPreferences] = useState({
    theme: "light",
    notifications: true,
  });

  // Handlers for form submission
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handlePreferencesChange = (e) => {
    const { name, type, checked, value } = e.target;
    setPreferences({
      ...preferences,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const saveSettings = () => {
    console.log("Profile:", profile);
    console.log("Preferences:", preferences);
    alert("Settings saved successfully!");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      {/* User Profile Settings */}
      <div className="bg-white p-6 shadow rounded-lg mb-8">
        <h2 className="text-xl font-bold mb-4">User Profile</h2>
        <form className="space-y-4">
          <div>
            <label className="block font-semibold mb-2">Username</label>
            <input
              type="text"
              name="username"
              value={profile.username}
              onChange={handleProfileChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={profile.password}
              onChange={handleProfileChange}
              className="w-full border px-4 py-2 rounded"
              placeholder="Enter a new password"
            />
          </div>
        </form>
      </div>

      {/* System Preferences */}
      <div className="bg-white p-6 shadow rounded-lg">
        <h2 className="text-xl font-bold mb-4">System Preferences</h2>
        <form className="space-y-4">
          <div>
            <label className="block font-semibold mb-2">Theme</label>
            <select
              name="theme"
              value={preferences.theme}
              onChange={handlePreferencesChange}
              className="w-full border px-4 py-2 rounded"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="notifications"
                checked={preferences.notifications}
                onChange={handlePreferencesChange}
                className="mr-2"
              />
              Enable Notifications
            </label>
          </div>
        </form>
      </div>

      {/* Save Button */}
      <div className="mt-6">
        <button
          onClick={saveSettings}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;
