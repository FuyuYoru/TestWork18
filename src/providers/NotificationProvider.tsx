'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Notification = {
  id: number;
  message: string;
};

type NotificationContextType = {
  notifications: Notification[];
  addNotification: (message: string) => void;
};

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

let idCounter = 0;

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (message: string) => {
    const id = ++idCounter;
    setNotifications((prev) => [...prev, { id, message }]);

    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 3500);
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification }}>
      {children}
      <div style={{
        position: 'fixed',
        top: 20,
        right: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        zIndex: 9999
      }}>
        {notifications.map((n) => (
          <div key={n.id} style={{
            backgroundColor: '#ce0000',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
          }}>
            {n.message}
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};
