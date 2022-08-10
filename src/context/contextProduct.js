import { useState, useEffect } from "react";
import { useTodos } from "../../hooks/";
import { todoReducer } from "././todoReducer";

export const contextProduct = () => {

  // Screen width
  const [desktopScreen, setDesktopScreen] = useState(true);

  const screenPage = () => {

    window.addEventListener('resize', () => {
  
      if(screen.width > 767) {
        setDesktopScreen(true)
      } else {
        setDesktopScreen(false)
      }
      
    });

  }

  useEffect(() => {
    screenPage();
  }, []);

  // Product data
  const {
    productData,
    isLoading,
    todos,
    handleNewTodo,
    handleDeleteTodo,
    totalCart
  } = useTodos( todoReducer);

  return {
    productData,
    isLoading,
    todos,
    handleNewTodo,
    handleDeleteTodo,
    totalCart,
    desktopScreen
  }

}