import { newMockEvent } from "matchstick-as";
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts";
import { ProfileCreated as ProfileCreatedEvent } from "../../generated/LensHubProxy/LensHubProxy";

export function createProfileCreatedEvent(
  profileId: BigInt,
  creator: Address,
  to: Address,
  handle: string,
  imageURI: string,
  followModule: Address,
  followModuleReturnData: Bytes,
  followNFTURI: string,
  timestamp: BigInt
): ProfileCreatedEvent {
  const event = changetype<ProfileCreatedEvent>(newMockEvent());

  event.parameters = new Array();

  event.parameters.push(
    new ethereum.EventParam(
      "profileId",
      ethereum.Value.fromUnsignedBigInt(profileId)
    )
  );

  event.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  );

  event.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  );

  event.parameters.push(
    new ethereum.EventParam("handle", ethereum.Value.fromString(handle))
  );

  event.parameters.push(
    new ethereum.EventParam("imageURI", ethereum.Value.fromString(imageURI))
  );

  event.parameters.push(
    new ethereum.EventParam(
      "followModule",
      ethereum.Value.fromAddress(followModule)
    )
  );

  event.parameters.push(
    new ethereum.EventParam(
      "followModuleReturnData",
      ethereum.Value.fromBytes(followModuleReturnData)
    )
  );

  event.parameters.push(
    new ethereum.EventParam(
      "followNFTURI",
      ethereum.Value.fromString(followNFTURI)
    )
  );

  event.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  );

  return event;
}
