import { ProfileCreated as ProfileCreatedEvent } from "../../generated/LensHubProxy/LensHubProxy";
import { Profile } from "../../generated/schema";

export function handleProfileCreated(event: ProfileCreatedEvent): void {
  const profile = new Profile(event.params.profileId.toString());
  profile.creator = event.params.creator;
  profile.to = event.params.to;
  profile.handle = event.params.handle;
  profile.imageURI = event.params.imageURI;
  profile.followModule = event.params.followModule;
  profile.followModuleReturnData = event.params.followModuleReturnData;
  profile.followNFTURI = event.params.followNFTURI;
  profile.timestamp = event.params.timestamp;
  profile.save();
}
