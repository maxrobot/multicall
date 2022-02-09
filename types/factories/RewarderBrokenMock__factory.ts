/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { RewarderBrokenMock } from "../RewarderBrokenMock";

export class RewarderBrokenMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<RewarderBrokenMock> {
    return super.deploy(overrides || {}) as Promise<RewarderBrokenMock>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): RewarderBrokenMock {
    return super.attach(address) as RewarderBrokenMock;
  }
  connect(signer: Signer): RewarderBrokenMock__factory {
    return super.connect(signer) as RewarderBrokenMock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RewarderBrokenMock {
    return new Contract(address, _abi, signerOrProvider) as RewarderBrokenMock;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "onSushiReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "sushiAmount",
        type: "uint256",
      },
    ],
    name: "pendingTokens",
    outputs: [
      {
        internalType: "contract IERC20[]",
        name: "rewardTokens",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "rewardAmounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610188806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80638bf637421461003b578063d63b3c491461007f575b600080fd5b61007d600480360360a081101561005157600080fd5b508035906001600160a01b03602082013581169160408101359091169060608101359060800135610036565b005b6100b16004803603606081101561009557600080fd5b508035906001600160a01b03602082013516906040013561014a565b604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156100f55781810151838201526020016100dd565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561013457818101518382015260200161011c565b5050505090500194505050505060405180910390f35b606080600080fdfea2646970667358221220ba498532d232848564214a78254e94a1de57f4178ebaa8c242a06cce65267c0c64736f6c634300060c0033";
