import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function FormComponent({
  onSubmit,
  buttonText,
  setName,
  setEmail,
  setPassword,
}: {
  onSubmit: () => Promise<void>;
  buttonText: string;
  setName: (e: string) => void;
  setEmail: (e: string) => void;
  setPassword: (e: string) => void;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  return (
    <Form {...form}>
      <form className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={() => (
            <FormItem>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {buttonText === "Signup" ? (
          <FormField
            control={form.control}
            name="name"
            render={() => (
              <FormItem>
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your name"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        ) : (
          <></>
        )}

        <FormField
          control={form.control}
          name="name"
          render={() => (
            <FormItem>
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your password"
                  id="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button
          onClick={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          {buttonText}
        </Button>
      </form>
    </Form>
  );
}
