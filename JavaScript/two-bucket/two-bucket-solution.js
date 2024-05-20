class Bucket {
  constructor(name, size, content) {
    this.name = name;
    this.size = size;
    this.content = content;
  }
}

const gcd = (x, y) => {
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }

  return x;
};

export class TwoBucket {
  #bucket_one_size;
  #bucket_two_size;
  #goal;
  #start_bucket;

  constructor(bucket_one_size, bucket_two_size, goal, start_bucket) {
    this.assert_Input_Parameters_Validity(
      bucket_one_size,
      bucket_two_size,
      goal
    );

    this.#bucket_one_size = bucket_one_size;
    this.#bucket_two_size = bucket_two_size;
    this.#goal = goal;
    this.#start_bucket = start_bucket;
  }

  assert_Input_Parameters_Validity(bucket_one_size, bucket_two_size, goal) {
    if (goal % gcd(bucket_one_size, bucket_two_size))
      throw new Error(
        `Goal ${goal} must divide evenly by the GCD of ${bucket_one_size} and ${bucket_two_size}!`
      );
    if (goal > bucket_one_size && goal > bucket_two_size)
      throw new Error(
        `Impossible goal: ${goal} is greater than ${bucket_one_size} and ${bucket_two_size}!`
      );
  }

  solve() {
    let bucket_a = new Bucket("one", this.#bucket_one_size, 0);
    let bucket_b = new Bucket("two", this.#bucket_two_size, 0);
    if (this.#start_bucket === "two") {
      [bucket_a, bucket_b] = [bucket_b, bucket_a];
    }

    let moves = 0;
    while (true) {
      if (bucket_a.content === this.#goal || bucket_b.content === this.#goal) {
        if (bucket_b.content === this.#goal) {
          [bucket_a, bucket_b] = [bucket_b, bucket_a];
        }

        return {
          moves,
          goalBucket: bucket_a.name,
          otherBucket: bucket_b.content,
        };
      } else if (bucket_a.content === 0) {
        bucket_a.content = bucket_a.size;
      } else if (bucket_b.size === this.#goal) {
        bucket_b.content = bucket_b.size;
      } else if (bucket_b.content === bucket_b.size) {
        bucket_b.content = 0;
      } else {
        const pour = Math.min(
          bucket_a.content,
          bucket_b.size - bucket_b.content
        );
        bucket_a.content -= pour;
        bucket_b.content += pour;
      }
      moves += 1;
    }
  }
}
