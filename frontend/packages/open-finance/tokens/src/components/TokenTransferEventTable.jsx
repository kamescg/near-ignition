/* --- Global --- */
import { useEffect } from "react";
import styled from "@emotion/styled";
import { TableAdvanced } from "@horizin/molecules";
import { helpers } from "@ethers-react/system";
import { AccountAddress, BigNumberToBalance } from "@ethers-react/ui";

/* --- Module --- */
import { useTokenEventTransfers } from "../hooks/useTokenEventTransfers";

const Styles = styled.div`
  table {
    width: 100%;
    th:nth-of-type(1) {
      // width: 30%;
    }
    th:nth-of-type(2) {
      // width: 20%;
    }
    th:nth-of-type(3) {
      // width: 10%;
    }
    th:nth-of-type(4) {
      // width: 10%;
    }
    th:nth-of-type(5) {
      // width: 20%;
    }
    td {
      :last-child {
        border-right: 0;
      }
    }
  }
`;

/**
 * @name TokenTransferEventTable
 * @param {String} contractSelect
 */
export const TokenTransferEventTable = ({ contractSelector, sx, ...props }) => {
  /* --- State --- */
  const contract = useTokenEventTransfers(contractSelector);

  /* --- Effects --- */
  useEffect(() => {
    console.log(contract, "contractcontractcontract");
  }, [contract]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Transactions",
        columns: [
          {
            Header: "From",
            accessor: (d) => (
              <AccountAddress
                blockie
                copy
                external
                trim={7}
                address={d.values.from}
                sxAddress={{ ml: 2 }}
              />
            ),
          },
          {
            Header: "To",
            accessor: (d) => (
              <AccountAddress
                blockie
                copy
                external
                trim={7}
                address={d.values.to}
                sxAddress={{ ml: 2 }}
              />
            ),
          },
          {
            Header: "Amount",
            accessor: (d) => <BigNumberToBalance bigNumber={d.values.value} />,
          },
          {
            Header: "TxHash",
            accessor: (d) =>
              helpers.shortenTransactionHash(d.meta.transactionHash, 6),
          },
        ],
      },
    ],
    []
  );

  return !contract.events ? null : (
    <Styles>
      <TableAdvanced
        // hideMainHeaders
        columns={columns}
        data={contract.events || []}
        sx={{
          border: "2px solid ",
          borderColor: "gray",
          color: "charcoal",
          py: 3,
        }}
        sxHeader={{
          borderBottom: "2px solid ",
          borderBottomColor: "gray",
          color: "charcoal",
          py: 3,
        }}
        sxCell={{
          borderRight: "1px solid",
          borderRightColor: "gray",
          p: 3,
        }}
        sxRow={{
          borderBottom: "1px solid ",
          borderBottomColor: "gray",
          "&:hover": {
            bg: "smoke",
          },
        }}
      />
    </Styles>
  );
};
