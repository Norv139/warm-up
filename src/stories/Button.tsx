import React from 'react';
import './button.css';

interface ButtonProps {
 
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;

  accLeft?: string;
  accRight?: string;

  block?: boolean; 
  
  disabled?: boolean;
  isLoading?: boolean;

  typeColor?: 'primary' | 'secondary' | 'danger' | 'success';
}

//primary, secondary, danger,success

/**
 * 
 * 
 *accLeft(JSX/string) - иконка слева +
 *
 *accRight(JSX/string) - иконка справа
 *
 *block(boolean) - растягивает кнопку по ширине родителя ?
 *
 *disabled(boolean) - кнопка не активна +
 *
 *isLoading(boolean) - состояние загрузки / заблокирована пока идет запрос на сервер +
 *
 *onClick(callbackFN) - действие при клике +
 *
 *typeColor(string) - определяет цвет кнопки (primary, secondary, danger,success)
 * 
 */
export const Button = ({
  label,
  typeColor = 'primary',
  disabled = false,
  block = false,
  accLeft,
  accRight,
  isLoading = false,
  ...props
}: ButtonProps) => {
  const mode = !disabled && !isLoading ? `storybook-button-color--${typeColor}` : 'storybook-button--block';
  const typeBlock = block ? `storybook-button-type--block` : '';
  return (
    <button
      type="button"
      className={['storybook-button', mode, typeBlock].join(' ')}
      
      {...props}
    >
      {accRight} {label} {accLeft}
    </button>
  );
};
