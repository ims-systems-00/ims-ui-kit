declare const filters: ({
    value: string;
    label: string;
    default: boolean;
    tableState: ({
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
} | {
    value: {
        mitigated: {
            status: boolean;
        };
        escalated?: undefined;
        sort?: undefined;
        accepted?: undefined;
    };
    label: string;
    tableState: ({
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
    default?: undefined;
} | {
    value: {
        escalated: {
            status: boolean;
        };
        mitigated: {
            status: boolean;
        };
        sort: string;
        accepted?: undefined;
    };
    label: string;
    tableState: ({
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
    default?: undefined;
} | {
    value: {
        mitigated: {
            status: boolean;
        };
        sort: string;
        escalated?: undefined;
        accepted?: undefined;
    };
    label: string;
    tableState: ({
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
    default?: undefined;
} | {
    value: {
        accepted: {
            status: boolean;
        };
        sort: string;
        mitigated?: undefined;
        escalated?: undefined;
    };
    label: string;
    tableState: ({
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
    default?: undefined;
})[];
export default filters;
