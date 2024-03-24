import React, { ReactNode } from 'react';
import { ConfigProvider, Button, Space, Input, Divider } from 'antd';

interface CustomProviderProps{
    children: ReactNode;
}

const CustomProvider: React.FC<CustomProviderProps> = ({children}) => {
    return(
        <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimary: '#F26D21',
              algorithm: true, // Enable algorithm
            },
            Input: {
              colorPrimary: '#F26D21',
              algorithm: true, // Enable algorithm
            },
            Select: {
                colorPrimary: '#F26D21',
                algorithm: true, // Enable algorithm
            },
            Checkbox: {
                colorPrimary: '#F26D21',
                algorithm: true, // Enable algorithm
            },
            DatePicker: {
                colorPrimary: '#F26D21',
                algorithm: true, // Enable algorithm
            }
          },
        }}
      >
        {children}
      </ConfigProvider>
    );
};

export default CustomProvider;