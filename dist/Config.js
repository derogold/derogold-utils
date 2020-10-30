"use strict";
// Copyright (c) 2018-2020, The TurtleCoin Developers
//
// Please see the included LICENSE file for more information.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
/** @ignore TODO: Update fork height TransactionPoWHeightDynV1 */
exports.Config = {
    activateParentBlockVersion: 2,
    coinUnitPlaces: 2,
    addressPrefix: 8411,
    keccakIterations: 1,
    defaultNetworkFee: 1000000,
    fusionMinInputCount: 12,
    fusionMinInOutCountRatio: 4,
    mmMiningBlockVersion: 2,
    maximumOutputAmount: 100000000000000,
    maximumOutputsPerTransaction: 90,
    maximumExtraSize: 1024,
    activateFeePerByteTransactions: false,
    feePerByte: 1.953125,
    feePerByteChunkSize: 256,
    TransactionPowDifficulty: 17000,
    TransactionPowHeight: 2370000,
    maximumLedgerTransactionSize: 38400,
    maximumLedgerAPDUPayloadSize: 480,
    minimumLedgerVersion: '1.2.0',
    ledgerDebug: false
};
