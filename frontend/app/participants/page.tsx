import { getParticipants } from "@/actions/get-participants";
import ParticipantCard from "@/components/participant-card";
import { Participant } from "@/types";

const ParticipantsPage = async () => {
  const participantsData: Participant[] = await getParticipants();

  return (
    <div className="grid grid-cols-2 gap-4">
      {participantsData.map((participant) => (
        <ParticipantCard
          key={participant.id}
          name={participant.name}
          role={participant.role}
        />
      ))}
    </div>
  );
};

export default ParticipantsPage;
