import React from "react";
export interface ActivityBaseProps {
    avatar: string;
    name: string;
    subHeading?: string;
    activity: React.ReactNode | string | null;
    footer?: React.ReactNode | string | null;
}
declare const ActivityBase: React.FC<ActivityBaseProps>;
export default ActivityBase;
