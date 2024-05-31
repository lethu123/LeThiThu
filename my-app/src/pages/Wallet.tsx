import { useMemo } from "react";

interface WalletBalance {
    currency?: number;
    amount: number;
    blockchain: string;
}
interface FormattedWalletBalance {
    currency?: number;
    amount: number;
    formatted: string;
}

interface Props {
}
const useWalletBalances = () => {
    const balances: WalletBalance[] = [
        { blockchain: 'Ethereum', amount: 100, currency: 2000 },
        { blockchain: 'Bitcoin', amount: 200, currency: 2000 },
    ]
    return balances

}
const usePrices = () => {
    const balances: FormattedWalletBalance[] = [
        { formatted: 'Ethereum', amount: 100, currency: 2000 },
        { formatted: 'Bitcoin', amount: 200, currency: 2000 },
    ]
    return balances
}
const WalletPage = (props: Props) => {
    const { ...rest } = props;
    const balances = useWalletBalances();
    const prices = usePrices();

    const getPriority = (blockchain: any): number => {
        switch (blockchain) {
            case 'Osmosis':
                return 100
            case 'Ethereum':
                return 50
            case 'Arbitrum':
                return 30
            case 'Zilliqa':
                return 20
            case 'Neo':
                return 20
            default:
                return -99
        }
    }

    const sortedBalances = useMemo(() => {
        return balances.filter((balance: WalletBalance) => {
            const balancePriority = getPriority(balance.blockchain);
            if (balancePriority > -99) {
                if (balance.amount <= 0) {
                    return true;
                }
            }
            return false
        })
    }, [balances, prices]);


    const rows = sortedBalances.map((balance: any, index: number) => {
        const usdValue = 1 * balance.amount;
        return (
            <WalletRow
                key={index}
                amount={balance.amount}
                usdValue={usdValue}
                formattedAmount={balance.formatted}
            />
        )
    })

    return (
        <div {...rest}>
            {rows}
        </div>
    )
}

export default WalletPage

const WalletRow = ({ amount, usdValue, formattedAmount }: { amount: number, usdValue: number, formattedAmount: any }) => {
    return <div></div>
}