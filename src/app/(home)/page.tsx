
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"


function page() {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-y-4">
        <div>
          <Button variant={'elevated'}>I am a button</Button>
        </div>
        <div>
          <Input placeholder="I am an Input" />
        </div>
        <div>
          <Progress value={50} />
        </div>
        <div>
          <Textarea value={"I am a Textarea"} />
        </div>
        <div>
          <Checkbox />
        </div>
      </div>
    </div>
  );
}

export default page