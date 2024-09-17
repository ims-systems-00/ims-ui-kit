declare const tables: {
    default: ({
        Header: string;
        accessor: string;
        sortable?: undefined;
        filterable?: undefined;
    } | {
        Header: string;
        accessor: string;
        sortable: boolean;
        filterable: boolean;
    })[];
    open: ({
        Header: string;
        accessor: string;
        sortable?: undefined;
        filterable?: undefined;
    } | {
        Header: string;
        accessor: string;
        sortable: boolean;
        filterable: boolean;
    })[];
    escalated: ({
        Header: string;
        accessor: string;
        sortable?: undefined;
        filterable?: undefined;
    } | {
        Header: string;
        accessor: string;
        sortable: boolean;
        filterable: boolean;
    })[];
    mitigated: ({
        Header: string;
        accessor: string;
        sortable?: undefined;
        filterable?: undefined;
    } | {
        Header: string;
        accessor: string;
        sortable: boolean;
        filterable: boolean;
    })[];
    accepted: ({
        Header: string;
        accessor: string;
        sortable?: undefined;
        filterable?: undefined;
    } | {
        Header: string;
        accessor: string;
        sortable: boolean;
        filterable: boolean;
    })[];
};
export default tables;
