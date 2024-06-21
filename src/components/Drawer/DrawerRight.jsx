import Button from "../Buttons/ButtonBase";
import Col from "../Grid/ColBase";
import Row from "../Grid/RowBase";
import React, { useEffect, useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import useDrawer from "./store/useDrawer";
function useInternalState() {
  const { isOpen, toggle, closeDrawer, openDrawer, closeAllDrawers } =
    useDrawer();
  //get window inner width form size prop
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  function _getSize(size) {
    if (windowWidth > 1300) return `${size}vw`;
    if (windowWidth > 1200) return `50vw`;
    if (windowWidth > 992) return `60vw`;
    return `100vw`;
  }
  return {
    isOpen,
    toggle,
    _getSize,
    closeDrawer,
    openDrawer,
    closeAllDrawers,
  };
}
const DrawerRight = ({
  drawerId = "",
  children,
  size = 40,
  toolbar = null,
  containerRef,
  onDrawerClose = () => {},
  onScroll = () => {},
}) => {
  const { isOpen, _getSize, closeDrawer } = useInternalState();
  return (
    <React.Fragment>
      <Drawer
        lockBackgroundScroll={true}
        open={isOpen(drawerId)}
        onClose={() => {
          closeDrawer(drawerId);
          onDrawerClose();
        }}
        direction="right"
        size={_getSize(size)}
        zIndex={1040}
      >
        <div
          ref={containerRef}
          onScroll={onScroll}
          className="p-4 h-100 overflow-y-scroll scrollbar-primary"
        >
          <Row>
            <Col md="12">
              <div className="d-flex flex-row-reverse align-items-center">
                <Button
                  className="border-0 pull-right"
                  onClick={() => {
                    closeDrawer(drawerId);
                    onDrawerClose();
                  }}
                  color="danger"
                  outline
                  size="sm"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 4L21 21M4 21L21 4"
                      stroke="#808080"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </Button>
                {toolbar}
              </div>
            </Col>
          </Row>
          {children}
        </div>
      </Drawer>
    </React.Fragment>
  );
};
export default DrawerRight;
