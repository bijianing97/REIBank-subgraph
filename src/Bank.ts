import { Account } from "./types/schema";
import { Deposit, Transfer, Withdraw } from "./types/Bank/Bank";
import { BigInt } from '@graphprotocol/graph-ts'

export function handleDeposit(event: Deposit): void {
    const address = event.params.from
    const amount = event.params.amount
    const id = `${address.toHex()}`
    let instance = Account.load(id)
    if (!instance) {
        instance = new Account(id)
        instance.balance = amount
        instance.operateTime = BigInt.fromU32(1)
    } else {
        instance.balance = instance.balance.plus(amount)
        instance.operateTime = instance.operateTime.plus(BigInt.fromU32(1))
    }
    instance.save()
}

export function handleTransfer(event: Transfer): void {
    const from = event.params.from
    const to = event.params.to
    const amount = event.params.amount
    let instanceFrom = Account.load(`${from.toHex()}`)
    let instanceTo = Account.load(`${to.toHex()}`)
    if (!instanceFrom) { return }
    instanceFrom.balance = instanceFrom.balance.minus(amount)
    instanceFrom.operateTime = instanceFrom.operateTime.plus(BigInt.fromU32(1))
    instanceFrom.save()
    if (!instanceTo) {
        instanceTo = new Account(`${to.toHex()}`)
        instanceTo.balance = amount
    } else {
        instanceTo.balance = instanceTo.balance.plus(amount)
    }
    instanceTo.save()
}

export function handleWithdraw(event: Withdraw): void {
    const instance = Account.load(`${event.params.from.toHex()}}`)
    if (!instance) {
        return
    } else {
        instance.balance = instance.balance.minus(event.params.amount)
        instance.operateTime = instance.operateTime.plus(BigInt.fromU32(1))
    }
    instance.save()
}
